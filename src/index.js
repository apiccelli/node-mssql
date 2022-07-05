import app from './app'
import productsRoutes from './routes/products.routes'

app.listen(app.get('port'))
app.use(productsRoutes, )

console.log('Server on port:', app.get('port'))