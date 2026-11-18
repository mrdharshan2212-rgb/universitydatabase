1. db.createCollection("students")
   db.students.insertOne(
   {
       Student-id : 101
       Name : Dharshan
       email : Dharshan@gmail.com
       Year : 2
   })

2. db.createCollection("course")
   db.course.insertOne(
   {
       course-id : "C101"
       course name : "Database management"
       department : BCA
   })

3. db.createCollection("academic_records")
   db.academic_records.insertOne(
   {
       Student-id : 101
       course-id : "C101"
       marks : 85
       grade : "A"
   })

   db.students.find()