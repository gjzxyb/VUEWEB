// module.exports = {
//   printWidth: 100, // 1.一行代码的最大字符数，默认是80(printWidth: <int>)
//   tabWidth: 2, // 2.tab宽度为2空格(tabWidth: <int>)
//   useTabs: false, // 3.是否使用tab来缩进，我们使用空格(useTabs: <bool>)
//   quoteProps: 'as-needed', // 6.object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
//   jsxSingleQuote: false, // 7.在jsx文件中的引号需要单独设置（jsxSingleQuote: <bool>）
//   bracketSpacing: true, // 9.object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
//   jsxBracketSameLine: false, // 10.jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: <bool>)
//   arrowParens: 'always', // 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
//   rangeStart: 0, // 12.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
//   rangeEnd: Infinity, //无穷
//   vueIndentScriptAndStyle: false, // 18. vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
//   endOfLine: 'lf', // 19.    endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
//   embeddedLanguageFormatting: 'off', // 20.embeddedLanguageFormatting: "off",默认是auto,控制被引号包裹的代码是否进行格式化
//   semi: false, // 结尾不用分号
//   singleQuote: true, // 使用单引号
//   disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
//   htmlWhitespaceSensitivity: 'ignore',
//   trailingComma: 'all' // 函数后面不加逗号，如果不写这一个，在methods 最后一个函数也会加逗号，eslint会报错，多了一个逗号
// }

module.exports = {
  printWidth: 100,
  tabWidth: 2, // 超过最大值换行
  semi: false, // 结尾不用分号
  singleQuote: true, // 使用单引号
  disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'none', // 函数后面不加逗号，如果不写这一个，在methods 最后一个函数也会加逗号，eslint会报错，多了一个逗号
  endOfLine: 'auto'
}
