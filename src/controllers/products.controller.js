import { getConnection } from '../database/connection'

export const getProducts = async (req, res)=> {
    
     const pageNumber = 1
     const rowsPage = 10
     const querySQL = `SELECT TOP(10) id, estoque ,nome, imagem, descricao,preco, id_url
     FROM dbo.ERA_Produto 
     WHERE estoque > 0 
     ORDER BY nome`
     //OFFSET ((1 - 1) * 10)) ROWS FETCH NEXT @RowspPage ROWS ONLY'`

     const pool =  await getConnection()
     const result = await pool.request().query(querySQL)

    res.send(result.recordsets)

}