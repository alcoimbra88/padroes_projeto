import { MyDatabaseModule } from './my-database-module';


const myDatabaseClassic = MyDatabaseModule

myDatabaseClassic.add({name:'Nome01',age:30})
myDatabaseClassic.add({name:'Nome02',age:40})
myDatabaseClassic.add({name:'Nome03',age:50})

myDatabaseClassic.show()

export {myDatabaseClassic}