import Supabase from '../../../helper/supabase';

export default function handler(_, res) {
  return Supabase.wishes()
    .then((wishes) => {
      return res.status(200).json({ wishes });
    }).catch(err => {
      return res.status(500).json({ message: err.message });
    });
}
