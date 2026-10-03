// Server I/O handling methods
// 1. Blocking I/O
// 2. Non-blocking I/O


Server Request Handling
        │
        ├── Blocking I/O
        │      └── Thread waits for I/O
        │
        └── Non-blocking I/O
               └── Thread doesn't wait; handles other work

// request handling architecture
Server Architecture
        │
        ├── Thread-per-request
        ├── Thread pool
        └── Event-driven (Event Loop)


Traditional Server
= Thread Pool + Blocking I/O

Node.js
= Event-driven + Non-blocking I/O



1. Thread-per-request
Idea

Each incoming request gets its own thread.

2. Thread Pool

Instead of creating a new thread every time, the server creates a fixed or limited number of threads.


//Simple computer view

Operating System
       │
       ▼
    Process
       │
  ┌────┴────┐
  ▼         ▼
Thread 1  Thread 2




// Node.js primarily uses an event-driven, non-blocking I/O model.

3. Event-driven (Event Loop)

// ### This is the model commonly associated with Node.js.

// Main idea

// Don't keep a thread waiting for slow I/O.



// ### Event Loop:

// Request 1 → Start DB query
//              │
//              └── DB works in background ⏳

// Request 2 → Start file operation
//              │
//              └── File operation continues ⏳

// Request 3 → Start API request
//              │
//              └── Network operation continues ⏳

// Event Loop continues handling other events


// libuv is a cross-platform asynchronous I/O library
// originally developed for Node.js