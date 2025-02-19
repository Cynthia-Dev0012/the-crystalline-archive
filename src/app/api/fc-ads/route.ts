import { NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET() {
    try {
      const { rows: fcAds } = await query('SELECT * FROM fc_ads ORDER BY created_at DESC');
      return NextResponse.json(fcAds);
    } catch (error) {
      console.error('Error fetching FC ads:', error);
      return NextResponse.json({ message: 'Failed to fetch FC ads.' }, { status: 500 });
    }
  
  }

  export async function POST(request: Request) {
    try {
      const { fcName, server, description, tags } = await request.json();
  
      await query(
        'INSERT INTO fc_ads (fc_name, server, description, tags) VALUES ($1, $2, $3, $4)',
        [fcName, server, description, tags]
      );
  
      return NextResponse.json({ message: 'Ad submitted successfully!' });
    } catch (error) {
      console.error('Error submitting ad:', error);
      return NextResponse.json({ message: 'Failed to submit ad.' }, { status: 500 });
    }


}
