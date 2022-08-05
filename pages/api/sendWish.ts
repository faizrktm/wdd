import Supabase from '../../helper/supabase';

export default function handler(req, res) {
  if(req.method !== 'POST') {
    res.status(405).json({ message: 'Please use POST' });
    return;
  }

  const { name, wish } = req?.body || {};

  if(typeof name !== 'string') {
    res.status(400).json({ message: 'Please fill name' });
  }

  if(typeof wish !== 'string') {
    res.status(400).json({ message: 'Please fill wish' });
  }

  return Supabase.setWishes({ name, wish })
    .then(() => {
      return res.status(200).json({ success: true });
    }).catch(err => {
      return res.status(500).json({ message: err.message });
    });
}
