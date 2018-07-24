/*匿名函数*/
(function () {
  const MyPlugin = {}
  //必须要有一个install()
  MyPlugin.install = function (Vue, options) {
    console.log('install()')
    //1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象方法myGlobalMethod()')
    }
    //2. 添加全局资源，zidyi指令
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value.toUpperCase()
    })
    //3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的方法$myMethod()')
    }
  }
  //向外暴露MyPlugin
  window.MyPlugin = MyPlugin
})()
/*
插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：
  1. 添加全局方法或者属性，如: vue-custom-element
  2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
  3. 通过全局 mixin 方法添加一些组件选项，如: vue-router
  4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
  5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router
*/



