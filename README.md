# Vue.js Project Coding Style Rules

这是一个Vue.js项目编码规范示例项目。最初是用于公司前端团队使用，现提出另存一份于此。

下面将为大家详细介绍该套规范的魅力。

## Vue.js项目编码规范指导

> 由于大家协同开发编码过程中出现了因本地配置不同造成的提交后代码变更巨大，严重影响了排错效率，故专门做了个规范，提高协作效率。

### 简要说明

1. 全部统一**使用VSCode编辑器**（务必保证最新版本）
2. 自我检查VSCode编辑器必要插件，**移除非必要插件**（可选，*但是这是良好的工具使用习惯*）
3. 移除除 `Preittier` 之外的所有格式化代码插件（不包括Vetur）
4. 可以根据需要对插件根据不同项目进行启用或禁用（可选）
5. 正确使用 `VSCode保存自动格式化` 功能
6. **【重要】**提交代码必须进行自我的 `Code Review` ，**杜绝产生风格大量的风格变化的变更提交**（如果上一个人仅有某处缩进出错，你进行修正属于合理操作）
7. *经发现破坏原始项目编码规范的自行在群发红包5元，嘻嘻*

> PS：请尽可能确保VSCode、Prettier、Vetur的版本为最新版本，若发现因Vetur内置Lint功能发生变化造成的问题，及时提出，适当处理。

### 详细说明

首先大家都是使用VSCode（请尽量保持最新）进行开发，本项目的是 `Vue.js` 项目，不同类型的项目，规范设置有区别。请先确认你的选型是基于 `Vue-CLI` 进行搭建。

在编写本文的时候，我使用的Vue-CLI版本为： `4.4.6` ，你可以通过以下命令查看版本：

``` bash
$ vue --version
@vue/cli 4.4.6
```

> 注意，这需要你全局安装Vue-CLI。

通过Vue-cli创建项目这里~~不详细说明了，注意，~~还是说一下吧：

* vue create test
* _如果之前已经按照我介绍的配置，直接使用上一次配置即可_
* ❯ Manually select features
* 一般来说选择 `Babel` / `Router` / `Vuex` / `CSS Pre-processors` / `Linter / Formatter`
* Use history mode for router: `Y`
* `Sass/SCSS (with dart-sass)` , 该选项随意
* 【非常重要】请选择正确的Lint模式，**ESLint + Airbnb config**
* 请选择**Lint on save**
* 请选择**In dedicated config files**
* 最后 `Save this as a preset for future projects?` ，建议**y**，这样以后就按照相同的配置创建项目即可。
* `Save preset as` ，这里写个你能记得住的配置名就好了，例如：**my vue project with eslint & airbnb config**或者**my default vue project config**之类

接下来就开始自动安装依赖了，安装完成后，打开VSCode，打开该项目准备进行**编辑器和ESLint规则**相关的配置。

#### VSCode保存文件自动触发Lint及其他

项目根目录下创建文件夹 `.vscode` ，创建该项目的自定义设置文件 `settings.json` ，内容如下：

``` js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // "path-autocomplete.pathMappings": {
  //   "@": "${folder}/src"
  // },
  // "vetur.format.defaultFormatter.html": "prettier",
  "vetur.validation.template": false
}
```

> `Path Autocomplete` 根据个人需要开启或关闭，需要插件支持[Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

> 【2020年09月24日】当然你也可以考虑使用[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)。

> 另外特别注意，此时，你的VSCode已经装有[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)插件，并启用。

> 【2020年09月24日】近期[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)更新到了[0.28.0](https://marketplace.visualstudio.com/items/octref.vetur/changelog)，其中默认的HTML formatter变更为`prettier`，故可以移除上述配置中的`"vetur.format.defaultFormatter.html": "prettier",`。

#### 添加prettier配置文件

在项目根目录下创建文件 `.prettierrc.json` ，内容如下：

``` json
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "printWidth": 160
}
```

### 修改编辑器通用配置

在项目跟目录下有个文件 `.editorconfig` ，修改其中的 `max_line_length` 为 `160` ，配置如下：

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 160
```

#### 修改ESLint配置

打开 `.eslintrc.js` 文件，修改配置如下：

``` js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    indent: ['error', 2],
    'func-names': ['error', 'never'],
    'no-unused-vars': ['error', {
      args: 'none'
    }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'max-len': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['_form', '_queries']
    }],
    'no-param-reassign': ['error', {
      props: false
    }],
    'consistent-return': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true
    }],
    'vue/max-len': ['error', {
      code: 160,
      template: 999,
      tabWidth: 2,
      comments: 999,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false
    }],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', {
      max: 8,
      maxEOF: 1
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'off',
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
```

> 注意这个markdown自动缩进了部分代码，请自行按规范处理。

注意，这里将的extend中的vue风格，修改成了 `recommended` ，想了解更多，请阅读[eslint-plugin-vue编码规则](https://eslint.vuejs.org/rules/)，建议每个vue开发者了解一下。

至此，关于Vue.js项目的编码规范相关的所有配置基本完成。如果在使用本套规范过程中出现问题，需要修改的，后期我会专门开一个仓库来进一步完善，并希望大家能够Fork，并积极提供Merge Request。

## 其他

* 请每个Vue开发者都要熟悉的[Vue.js风格指南](https://cn.vuejs.org/v2/style-guide/)
* 建议每个人都能够了解[ESLint Rules](https://eslint.org/docs/rules/)
* 希望大家能够了解一下Vetur的Formatting相关的用法[Vetur Formatting](https://vuejs.github.io/vetur/formatting.html)
