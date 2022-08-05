import { createClient, SupabaseClient } from '@supabase/supabase-js';

class Supabase {
  supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://eaueenhnwtiapwmwzqpe.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async wishes() {
    let { data: wishes, error } = await this.supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if(error){
      throw new Error(error.message);
    }

    return wishes;
  }

  async setWishes({ name, wish }: { name: string, wish: string }) {
    const { error } = await this.supabase
      .from('wishes')
      .insert([
        { name, wish },
      ]);

    if(error){
      throw new Error(error.message);
    }

    return true;
  }
}

export default new Supabase();

