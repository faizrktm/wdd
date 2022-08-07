import Supabase from '../../helper/supabase';

export default function handler(req, res) {
  if(req.method !== 'POST') {
    res.status(405).json({ message: 'Please use POST' });
    return;
  }

  const { name } = req?.body || {};

  if(typeof name !== 'string') {
    res.status(400).json({ message: 'Please fill name' });
  }

  return Supabase.sendRsvp({ name })
    .then((wishes) => {
      return res.status(200).json({ wishes });
    }).catch(err => {
      return res.status(500).json({ message: err.message });
    });
}
