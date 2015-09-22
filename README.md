# gulp-exercise
gulp-exercise


```
sudo npm install -g gulp


npm install --save-dev gulp gulp-util --registry=https://registry.npm.taobao.org

==>

{
  "devDependencies": {
    "gulp-util": "~2.2.14",
    "gulp": "~3.5.2"
  }
}
```

gulp api
- gulp.task(name, fn) - 定义任务，第一个参数是任务名，第二个参数是任务内容。
- gulp.src(path) - 选择文件，传入参数是文件路径。
- gulp.dest(path) - 输出文件
- gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列
