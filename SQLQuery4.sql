	create database NewBoilerPlateDB
	go
	use NewBoilerPlateDB 
	go
	create table customer
	(
		Id int  identity(1,1) Not Null primary key,
		Name varchar(50) not null,
		Address varchar(50),
		
		
		)
		
		create table product
	(
		Id int  identity(1,1) Not Null primary key,
		Name varchar(50) not null,
		Price int not null
		
		)
		
		create table store
	(
		Id int  identity(1,1) Not Null primary key,
		Name varchar(50) not null,
		Address varchar(50)
		
		
		)
		
		create table sales
	(
		Id int  identity(1,1) Not Null primary key,
		prodId int references product(Id),
		custId int references customer(Id),
		storeId int references store(Id),
		datesold datetime
		
		)
		
	
	
	
	    insert into customer values('Jack','Sydney')
		insert into customer values('Mack','Mel')
		insert into product values('Tv',700)
		insert into product values('laptop',200)
		insert into store values('store 1','Add1')
		insert into store values('store 2','Add2')
		insert into sales values(1,2,1,GETDATE()-5)
		insert into sales values(2,2,2,GETDATE()-10)