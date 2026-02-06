import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 定义公共路由（不需要登录即可访问）
const publicRoutes = ['/login', '/register', '/404']

// 基础路由 - 不需要权限控制的路由
const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes: baseRoutes,
  scrollBehavior: (_, __, savedPosition) => {
    return savedPosition || { top: 0, left: 0 }
  },
})

// 全局前置守卫
// router.beforeEach(async (to, _, next) => {
//   // 检查当前路由是否为公共路由
//   const isPublicRoute = publicRoutes.includes(to.path)
//
//   // 如果用户已登录但动态路由尚未初始化
//   if (isLoggedIn() && !hasInitRoutes) {
//     try {
//       // 获取权限store
//       // const permissionStore = await initStore()
//       //
//       // // 获取用户菜单
//       // const response = await fetchUserMenus()
//       //
//       // if (response.code === 200 && response.data) {
//       //   // 设置菜单数据
//       //   permissionStore.setMenus(response.data)
//       //
//       //   // 生成并添加动态路由
//       //   permissionStore.addRoutes()
//       //
//       //   // 标记路由已初始化
//       //   hasInitRoutes = true
//       //
//       //   // 如果访问的是根路径，重定向到首页
//       //   if (to.path === '/') {
//       //     next({ path: '/dashboard', replace: true })
//       //   } else {
//       //     // 重定向到目标页面，确保新路由能够被正确匹配
//       //     next({ ...to, replace: true })
//       //   }
//       //   return
//       // }
//     }
//     catch (error) {
//       console.error('初始化路由失败:', error)
//     }
//   }
//
//   // 如果不是公共路由且用户未登录，则重定向到登录页
//   if (!isPublicRoute && !isLoggedIn()) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }, // 保存原目标路径，以便登录后重定向
//     })
//   }
//   else if ((to.path === '/login' || to.path === '/register') && isLoggedIn()) {
//     // 如果用户已登录但访问登录或注册页，则重定向到首页
//     next({ path: '/' })
//   }
//   else {
//     // 其他情况正常放行
//     next()
//   }
// })

// 清除路由和登出时重置路由状态
export const resetRouter = async () => {
  // const permissionStore = await initStore()
  // permissionStore.resetRoutes()
  // hasInitRoutes = false
}

export default router
