# js面试题

##### 1.并发（concurrency）和并行（parallelism）区别

**并发**：多个任务在同一个 CPU 核上按细分的时间片轮流(交替)执行，从逻辑上来看那些任务是同时执行。针对 CPU 内核来说，任务仍然是按细粒度的串行执行。也难怪在 Java 5 中新加的并发 API 的包名是 `java.uti.concurrent`。

**并行**：区别与串行，多个任务真正的分配到不同的 CPU 内核上去执行的，它们是真正的同时执行。注意到 Java 8 的 Collection 除了 stream() 方法外，还有个方法名字叫做 `parallelStream()`, 为什么它是 `parallel` 呢？因为它使用的线程池是 `ForkJoinPool.commonPool`, 而这个池的大小是 CPU 内核数减一，主线程已经占了一个核，希望 的是 `parallelStream()` 中每个任务都能理想的分配到不同的 CPU 内核上去并行执行。

更通俗一点的类比，并发是四辆汽车在同一个车道上跑; 并行是单向四车道，四辆车在各自的车道跑，彼此不受影响。