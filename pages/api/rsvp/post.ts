import Supabase from '../../../helper/supabase';

export default function handler(req, res) {
  if(req.method !== 'POST') {
    res.status(405).json({ message: 'Please use POST' });
    return;
  }

  const { name, present } = req?.body || {};

  if(typeof name !== 'string') {
    res.status(400).json({ message: 'Please fill name' });
  }

  if(typeof present !== 'number') {
    res.status(400).json({ message: 'Please fill present' });
  }

  return Supabase.sendRsvp({ name, present })
    .then((rsvp) => {
      return res.status(200).json({ rsvp });
    }).catch(err => {
      return res.status(500).json({ message: err.message });
    });
}
