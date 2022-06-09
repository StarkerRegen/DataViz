### jest配置
`__tests__/index.spec.js`【error】
  具体描述：'describe' is not defined; 'test' is not defined;'expect' is not defined
  解决：
  在`.eslintrc.js`文件中添加

  ```text
    "env": {
      "jest": true
    }
  ```
### git问题
使用`git pull origin master`时出现问题如下：
```text
hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint: 
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: refusing to merge unrelated histories
```
> **偏离分支**
> 当本地的分支落后于远程分支时，本地分支又自行修改项目文件生成了新的提交，这时本地分支再执行git pull命令就不能快进合并，并且还容易发生冲突。这时的本地分支便称为偏离分支，因为这时的本地分支的最新提交跟远程分支的最新提交不同，产生了偏离。

问题产生的原因：
当我们执行不带任何选项的`git pull`时，Git不知道应该使用哪种合并策略来执行该命令，因此会给出警告。

解决：
`git config pull.ff false`
`