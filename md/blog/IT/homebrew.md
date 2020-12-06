### Mac HomeBrew 安装问题

#### 安装

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> 将以上命令粘贴至终端

> 如果您直接安装成功了，您可以直接先去买彩票。

#### 安装条件

[Documentation](https://docs.brew.sh/Installation)

![documentation](https://7661-vampire-2d0c42-1302906344.tcb.qcloud.la/markdown/images/homebrew/homebrew_documentation.png)

so .... 安装之前检查一下

#### 异常情况1

如果没有翻墙的话，一般会报如下错我

```sh 
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```



##### 解决方案

在本机的 host 文件中添加，建议使用 switchhosts 方便 host 管理

```sh

199.232.68.133 raw.githubusercontent.com
199.232.68.133 user-images.githubusercontent.com
199.232.68.133 avatars2.githubusercontent.com
199.232.68.133 avatars1.githubusercontent.com
```

添加以上几条 host 配置，页面的图片展示就正常了，homebrew 也能装了，nvm 也行动灵活了。

#### 异常情况2

如果是新款的M1系列的电脑，安装不成功，因为他只支持Intel


##### 解决方案

Homebrew 可以通过 Rosetta 2 转换的方式进行安装，方法也很简单，只需在过去的安装命令前加上 arch -x86_64 即可

```sh
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

这种通过转制的 Homebrew 在某些软件上可能有一些兼容性问题，因此建议安装另一个手动编译版：

```sh

$ sudo mkdir -p /opt/homebrew
$ sudo chown -R $(whoami):staff /opt/homebrew
$ cd /opt
$ curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

第一种方式安装的 Homebrew 在 /usr/local/bin 目录下，而第二种方式安装的在 /opt/homebrew 目录下，后者不会自动添加到 PATH 环境变量中，因此需要手动设置：

```sh
export PATH="/opt/homebrew/bin:$PATH"
```

这样，你的 Mac 里就有了两个 Homebrew：一个是 Rosetta 转换的，一个是原生的。原生的目录在前面，那么 brew 命令将默认运行这个版本。

如果想运行 Rosetta 转换版怎么办？我们可以单独设置一个 ibrew 命令：

```sh
alias ibrew='arch -x86_64 /usr/local/bin/brew'
```

目前，Homebrew 尚未提供用于 ARM Mac 的预编译软件包，因此最好使用 brew install -s 命令进行安装。

具体有哪些软件包不兼容，可以到 GitHub 项目页的 issue 中查询：

```sh
https://github.com/Homebrew/brew/issues/7857
```

### 参考

- https://docs.brew.sh/Installation
- https://mp.weixin.qq.com/s/4VmDCH-4bCFnCakTfTKszQ