//  “关闭”或0-关闭规则
// “警告”或1-将规则作为警告（不会影响退出代码）
// “错误”或2-将规则作为错误打开（退出代码为1   触发）
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    './.eslintrc-auto-import.json',
  ],
  'overrides': [],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'parser': '@typescript-eslint/parser'
  },
  'plugins': ['vue', '@typescript-eslint','import'],
  'rules': {
    'max-classes-per-file': 1,
    // 组件名两个单词
    'vue/multi-word-component-names': 0,
    'no-trailing-spaces': 1,
    // 最大空行
    'no-multiple-empty-lines': [1, {'max': 3}],
    'vue/valid-v-model': 1,
    // 未使用的变量给出警告
    'no-unused-vars': 1,
    // 结束符
    'linebreak-style': ['off', 'windows'],
    // 变量未定义或引入
    'no-undef': 0,
    // 多余逗号
    'comma-dangle': 0,
    // 是否强制分号
    'semi': 1,
    // 括号前后强制一个空格
    'object-curly-spacing': 1,
    // 禁止使用多余的包
    'import/no-extraneous-dependencies': [1, {'devDependencies': true}],
    // import 后必须是新行
    'import/newline-after-import': 1,
    // 确保在导入路径内一致使用文件扩展名
    'import/extensions': 0,
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 0,
    // 首选默认导出导入/首选默认导出
    'import/prefer-default-export': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止使用 new 以避免产生副作用
    'no-new': 1,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 0,
    // 禁用 console
    'no-console': 0,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 0,
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 禁用特定的语法
    'no-restricted-syntax': 0,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 0,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止重复模块导入
    'no-duplicate-imports': [0, {'includeExports': false}],
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁止不必要的转义字符
    'no-useless-escape': 0,
    // 强制使用一致的缩进
    'indent': ['error', 2],
    // 强制使用骆驼拼写法命名约定
    'camelcase': 0,
    // 强制类方法使用 this
    'class-methods-use-this': 0,
    // 要求构造函数首字母大写
    'new-cap': 0,
    // 强制一致地使用 function 声明或表达式
    'func-style': 0,
    // 强制一行的最大长度
    'max-len': 0,
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 0,
    // 强制switch要有default分支
    'default-case': 2,
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 强制箭头函数的箭头前后使用一致的空格
    'no-cond-assign': 2, // 条件语句的条件中不允许出现赋值运算符
    'no-constant-condition': 2, // 条件语句的条件中不允许出现恒定不变的量
    'no-control-regex': 2, // 正则表达式中不允许出现控制字符
    'no-debugger': 2, // 不允许出现debugger语句
    'no-dupe-args': 2, // 函数定义的时候不允许出现重复的参数
    'no-dupe-keys': 2, // 对象中不允许出现重复的键
    'no-duplicate-case': 2, // switch语句中不允许出现重复的case标签
    'no-empty': 2, // 不允许出现空的代码块
    'no-empty-character-class': 2, // 正则表达式中不允许出现空的字符组
    'no-ex-assign': 2, // 在try catch语句中不允许重新分配异常变量
    'no-extra-boolean-cast': 2, // 不允许出现不必要的布尔值转换
    'no-extra-parens': 0, // 不允许出现不必要的圆括号
    'no-extra-semi': 2, // 不允许出现不必要的分号
    'no-func-assign': 2, // 不允许重新分配函数声明
    'no-inner-declarations': ['error', 'functions'], // 不允许在嵌套代码块里声明函数
    'no-invalid-regexp': 2, // 不允许在RegExp构造函数里出现无效的正则表达式
    'no-irregular-whitespace': 2, // 不允许出现不规则的空格
    'no-negated-in-lhs': 2, // 不允许在in表达式语句中对最左边的运算数使用取反操作
    'no-obj-calls': 2, // 不允许把全局对象属性当做函数来调用
    'no-regex-spaces': 2, // 正则表达式中不允许出现多个连续空格
    'quote-props': 2, // 对象中的属性名是否需要用引号引起来
    'no-sparse-arrays': 2, // 数组中不允许出现空位置
    'no-unreachable': 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
    'use-isnan': 2, // 要求检查NaN的时候使用isNaN()
    'valid-jsdoc': ['error', {
      'requireReturn': false,
      'requireParamDescription': false,
      'requireReturnDescription': true
    }], // 强制JSDoc注释
    'valid-typeof': ['error', {
      'requireStringLiterals': true
    }], // 在使用typeof表达式比较的时候强制使用有效的字符串
    'block-scoped-var': 2, // 将变量声明放在合适的代码块里
    'complexity': 0, // 限制条件语句的复杂度
    'curly': ['error', 'all'], // 强制使用花括号的风格
    'dot-notation': ['error', {'allowKeywords': false, 'allowPattern': ''}], // 获取对象属性的时候使用点号
    'eqeqeq': ['error', 'smart'], // 比较的时候使用严格等于
    'no-alert': 1, // 不允许使用alert，confirm，prompt语句
    'no-caller': 2, // 不允许使用arguments.callee和arguments.caller属性
    'guard-for-in': 0, // 监视for in循环，防止出现不可预料的情况
    'no-div-regex': 2, // 不能使用看起来像除法的正则表达式
    'no-else-return': 0, // 如果if语句有return，else里的return不用放在else里
    'no-labels': ['error', {
      'allowLoop': false,
      'allowSwitch': false
    }], // 不允许标签语句
    'no-eq-null': 2, // 不允许对null用==或者!=
    'no-eval': 2, // 不允许使用eval()
    'no-extend-native': 2, // 不允许扩展原生对象
    'no-extra-bind': 2, // 不允许不必要的函数绑定
    'no-fallthrough': 2, // 不允许switch按顺序全部执行所有case
    'no-floating-decimal': 2, // 不允许浮点数缺失数字
    'no-implied-eval': 2, // 不允许使用隐式eval()
    'no-iterator': 2, // 不允许使用__iterator__属性
    'no-lone-blocks': 2, // 不允许不必要的嵌套代码块
    'no-loop-func': 2, // 不允许在循环语句中进行函数声明
    'no-multi-spaces': 2, // 不允许出现多余的空格
    'no-multi-str': 2, // 不允许用\来让字符串换行
    'no-global-assign': 2, // 不允许重新分配原生对象
    'no-new-func': 2, // 不允许使用new Function
    'no-new-wrappers': 2, // 不允许使用new String，Number和Boolean对象
    'no-octal': 2, // 不允许使用八进制字面值
    'no-octal-escape': 2, // 不允许使用八进制转义序列
    'no-redeclare': 2, // 不允许变量重复声明
    'no-return-assign': 2, // 不允许在return语句中使用分配语句
    'no-script-url': 2, // 不允许使用javascript:void(0)
    'no-self-compare': 2, // 不允许自己和自己比较
    'no-sequences': 2, // 不允许使用逗号表达式
    'no-throw-literal': 2, // 不允许抛出字面量错误 throw "error"
    'no-unused-expressions': 2, // 不允许无用的表达式
    'no-void': 2, // 不允许void操作符
    'no-warning-comments': [1, {'terms': ['todo', 'fixme', 'any other term']}], // 不允许警告备注
    'no-with': 2, // 不允许使用with语句
    'radix': 1, // 使用parseInt时强制使用基数来指定是十进制还是其他进制
    'vars-on-top': 0, // var必须放在作用域顶部
    'wrap-iife': [2, 'any'], // 立即执行表达式的括号风格
    'yoda': [2, 'never', {'exceptRange': true}], // 不允许在if条件中使用yoda条件
    'strict': [2, 'function'], // 使用严格模式
    'no-catch-shadow': 2, // 不允许try catch语句接受的err变量与外部变量重名"no-delete-var": 2, //不允许使用delete操作符
    'no-label-var': 2, // 不允许标签和变量同名
    'no-shadow-restricted-names': 2, // js关键字和保留字不能作为函数名或者变量名
    'no-undef-init': 2, // 不允许初始化变量时给变量赋值undefined
    'no-undefined': 2, // 不允许把undefined当做标识符使用
    'brace-style': [2, '1tbs', {'allowSingleLine': false}], // 大括号风格
    'comma-style': [2, 'last'], // 逗号风格
    'consistent-this': [0, 'self'], // 当获取当前环境的this是用一样的风格
    'eol-last': 2, // 文件以换行符结束
    'func-names': 0, // 函数表达式必须有名字
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}], // 对象字面量中冒号的前后空格
    'max-nested-callbacks': 0, // 回调嵌套深度
    'new-parens': 2, // new时构造函数必须有小括号
    'newline-after-var': 0, // 变量声明后必须空一行
    'no-array-constructor': 2, // 不允许使用数组构造器
    'no-inline-comments': 0, // 不允许行内注释
    'no-lonely-if': 0, // 不允许else语句内只有if语句
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 不允许混用tab和空格
    'no-nested-ternary': 2, // 不允许使用嵌套的三目运算符
    'no-new-object': 2, // 禁止使用new Object()
    'fun-call-spacing': 0, // 函数调用时，函数名与()之间不能有空格
    'no-ternary': 0, // 不允许使用三目运算符
    'one-var': 0, // 强制变量声明放在一起
    'operator-assignment': 0, // 赋值运算符的风格
    'padded-blocks': [2, 'never'], // 块内行首行尾是否空行
    'quotes': [1, 'single', 'avoid-escape'], // 引号风格
    'semi-spacing': [2, {'before': false, 'after': true}], // 分后前后空格
    'sort-vars': 0, // 变量声明时排序
    'space-before-blocks': [2, 'always'], // 块前的空格
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}], // 函数定义时括号前的空格
    'space-infix-ops': [2, {'int32Hint': true}], // 操作符周围的空格
    'keyword-spacing': 2, // 关键字前后的空格
    'space-unary-ops': [2, {'words': true, 'nonwords': false}], // 一元运算符前后不要加空格
    'wrap-regex': 2, // 正则表达式字面量用括号括起来
    'generator-star-spacing': [2, 'both'], // 生成器函数前后空格
    'max-depth': 0, // 嵌套块深度
    'max-params': 0, // 函数最多能有多少个参数
    'max-statements': 0, // 函数内最多有几个声明
    'no-bitwise': 0, // 不允许使用位运算符
    'operator-linebreak': 0, // 不允许=换行
    '@typescript-eslint/no-var-requires': 0,
    'no-class-assign': 2,//禁止给类赋值
    'no-const-assign': 2,//禁止修改const声明的变量
    'no-continue': 0,//禁止使用continue
    'no-delete-var': 2,//不能对var声明的变量使用delete操作符
    'noempty-character-class': 0,//正则表达式中的[]内容不能为空
    'no-empty-label': 0,//禁止使用空label
    'no-implicit-coercion': 1,//禁止隐式转换
    'no-invalid-this': 2,//禁止无效的this，只能用在构造器，类，对象字面量
    'no-mixed-requires': [0, false],//声明时不能混用声明类型
    'no-native-reassign': 2,//不能重写native对象
    'no-new-require': 2,//禁止使用new require
    'no-path-concat': 0,//node中不能使用__dirname或__filename做路径拼接
    'no-process-env': 0,//禁止使用process.env
    'no-process-exit': 0,//禁止使用process.exit()
    'no-proto': 2,//禁止使用__proto__属性
    'no-restricted-modules': 0,//如果禁用了指定模块，使用就会报错
    'no-spaced-func': 2,//函数调用时 函数名与()之间不能有空格
    'no-sync': 0,//nodejs 禁止同步方法
    'no-this-before-super': 0,//在调用super()之前不能使用this或super
    'no-unexpected-multiline': 2,//避免多行表达式
    'no-useless-call': 2,//禁止不必要的call和apply
    'array-bracket-spacing': [2, 'never'],//是否允许非空数组里面有多余的空格
    'arrow-parens': 0,//箭头函数用小括号括起来
    'arrow-spacing': 0,//=>的前/后括号
    'accessor-pairs': 0,//在对象中使用getter/setter
    'callback-return': 1,//避免多次调用回调什么的
    'comma-spacing': 0,//逗号前后的空格
    'computed-property-spacing': [0, 'never'],//是否允许计算后的键名什么的
    'constructor-super': 0,//非派生类不能调用super，派生类必须调用super
    'dot-location': 0,//对象访问符的位置，换行的时候在行首还是行尾
    'handle-callback-err': 0,//nodejs 处理错误
    'id-length': 0,//变量名长度
    'init-declarations': 0,//声明时必须赋初值
    'lines-around-comment': 0,//行前/行后备注
    'object-shorthand': 0,//强制对象字面量缩写语法
    'prefer-spread': 0,//首选展开运算
    'prefer-reflect': 0,//首选Reflect的方法
    'id-match': 0,//命名检测
    'require-yield': 0,//生成器函数必须有yield
    'space-after-keywords': [0, 'always'],//关键字后面是否要空一格
    'space-in-parens': [0, 'never'],//小括号里面要不要有空格
    'space-return-throw-case': 0,//return throw case后面要不要加空格
    'spaced-comment': 0,//注释风格要不要有空格什么的
    'vue/html-self-closing': 1,// 强制实施自动关闭样式
    'vue/no-multiple-template-root': 0, //多个根组件
  }
};
