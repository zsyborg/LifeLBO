

import { NextResponse } from 'next/server';
import { connectToDb } from '@/app/components/data/dbconnector';
// import { connectToDb } from '@/lib/mssql';
import sql from 'mssql'

export async function GET(request, { params } : { params: { id: string } }) {
    const { id } = params
  await connectToDb()

  try {
    const result = await sql.query(`SELECT * FROM dbo.Address WHERE Id = ${id}`);
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({message: 'Error Fetching Data'});
    
  }

  return NextResponse.json(users);
}