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

  async sendWishes({ name, wish }: { name: string, wish: string }) {
    const { data, error } = await this.supabase
      .from('wishes')
      .insert([
        { name, wish },
      ]);

    if(error){
      throw new Error(error.message);
    }

    return data;
  }

  async sendRsvp({ name, present }: { name: string, present: boolean }) {
    const { data, error } = await this.supabase
      .from('rsvp')
      .insert([
        { name, present },
      ]);

    if(error){
      throw new Error(error.message);
    }

    return data;
  }

  async checkRsvp(name: string) {
    const { data, error } = await this.supabase
      .from('rsvp')
      .select('name,present')
      .eq('name', name)
      .order('created_at', { ascending: false });

    if(error){
      throw new Error(error.message);
    }

    return data;
  }
}

export default new Supabase();

