Step 1:
Creation of database in neon
create tables using the migration
##npm i express sequelize pg pg-hstore
##npm i sequelize-cli --save-dev

##npx sequelize-cli migration:generate --name create-<tablename>-table
This line of code automatically creates a dir named migrations and table under it


##npm i sequelize-cli --save-dev -------> For execution of the migration
##npx sequelize-cli db:migrate --------------> creates the tables at the db
##npx sequelize-cli db:migrate:undo---------->drops the tables created

**Note**
Either use pool query or sequalize approach dont mix both.
