```console
$ npm test
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> blogapp@1.0.0 test
> jest --verbose

 PASS  tests/mostBlogs.test.js
  most blogs
    √ when list has many blogs, equals to Robert C. Martin (2 ms)                                                                                                
                                                                                                                                                                 
 PASS  tests/favoriteBlog.test.js
  favorite blog
    √ when list has no blogs, equals to null (2 ms)                                                                                                              
    √ when list has one blog, equals to that blog (1 ms)                                                                                                         
    √ when list has many blogs, equals to the most liked blog (1 ms)                                                                                             
                                                                                                                                                                 
 PASS  tests/mostLikes.test.js                                                                                                                                   
  most likes
    √ when list has many blogs, equals to Edsger W. Dijkstra (2 ms)
                                                                                                                                                                 
 PASS  tests/totalLikes.test.js                                                                                                                                  
  total likes
    √ when list has no blogs, equals 0 (1 ms)
    √ when list has only one blog, equals the likes of that                                                                                                      
    √ when list has many blogs, equals the sum of them all                                                                                                       
                                                                                                                                                                 
 PASS  tests/user_api.test.js                                                                                                                                    
  when there is initially one user saved
    √ user is returned (1011 ms)
    √ creating a new user succeeds (219 ms)
    √ creation fails if username is missing (119 ms)                                                                                                             
    √ creation fails if password is missing (172 ms)                                                                                                             
    √ creation fails if username is shorter than 3 characters (134 ms)                                                                                           
    √ creation fails if password is shorter than 3 characters (137 ms)                                                                                           
                                                                                                                                                                 
 PASS  tests/dummy.test.js                                                                                                                                       
  √ dummy returns one (1 ms)

 PASS  tests/blog_api.test.js
  when there is initially some blogs saved
    √ blogs are returned as json (727 ms)                                                                                                                        
    √ blogs have id property named id instead of _id (60 ms)                                                                                                     
  addition of a new blog                                                                                                                                         
    √ a valid blog can be added by authorized user (166 ms)                                                                                                      
    √ likes property defaults to 0 if missing (162 ms)                                                                                                           
    √ backend responds with status 400 if title and url are missing (89 ms)                                                                                      
  deletion of a blog                                                                                                                                             
    √ succeeds with status code 204 if id is valid (330 ms)                                                                                                      
    √ fails with status code 401 if user is not authorized (307 ms)                                                                                              
  updating a blog                                                                                                                                                
    √ succeeds with status 200 if id is valid (90 ms)                                                                                                            
                                                                                                                                                                 
Test Suites: 7 passed, 7 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        16.254 s
Ran all test suites.
```