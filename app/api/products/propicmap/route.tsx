
import { NextResponse } from 'next/server';
import { connectToDb } from '@/app/components/data/dbconnector';
// import { connectToDb } from '@/lib/mssql';
import sql from 'mssql'

export async function GET() {

  await connectToDb()

  try {
    const result = await sql.query('SELECT * FROM dbo.Product_Picture_Mapping');
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({message: 'Error Fetching Data'});
    
  }

  return NextResponse.json(users);
}