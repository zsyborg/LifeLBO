import sql from 'mssql';

interface DbConfig {
  user: string;
  password: string;
  server: string;
  database: string;
  options: {
    encrypt: boolean;
    enableArithAbort: boolean;
  };
}

const dbConfig: DbConfig = {
  user: 'lifeisadmin',
  password: 'Ajna@4028',
  server: '97.74.95.213',
  database: 'Lifeisspeed_web',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

export async function connectToDb(): Promise<void> {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to MSSQL database');
  } catch (err) {
    console.error('Error connecting to MSSQL database:', err);
  }
}

export async function queryDb(query: string): Promise<any[]> {
  try {
    const result = await sql.query(query);
    return result.recordset;
  } catch (err) {
    console.error('Error executing query:', err);
    return [];
  }
}