import sql from 'mssql'

// sqlserver.portodivino.com.br
// 186.209.225.34

const dbsettings = {

     user: 'portodivino',
     password: '4u2eruvkpu9',
     server: 'sqlserver.portodivino.com.br',
     database: 'portodivino',
     options:{
        encrypt: true,
        trustServerCertificate: true
     }

}

export  async function getConnection(){ 
    try {
    const pool = await sql.connect(dbsettings)
   // const result = await pool.request().query('SELECT 1')
    //console.log(result)
    return pool
    } catch ( error ) {
        console.error(error)
    }
}
