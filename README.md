# AI 对战平台

这是一个基于多技术栈的AI对战游戏平台项目，包含前端展示、后端服务和AI模块三个主要部分。

## 📁 项目结构

```
ai/
├── app/                    # Vue 3 + Vite 演示应用
│   ├── src/
│   │   ├── App.vue        # 主应用组件
│   │   ├── main.js        # 应用入口文件
│   │   └── components/    # Vue组件目录
│   ├── package.json       # 项目依赖配置
│   └── vite.config.js     # Vite构建配置
│
├── backend/               # Spring Boot 后端服务
│   ├── src/main/java/com/ai/backend/
│   │   ├── BackendApplication.java    # Spring Boot启动类
│   │   └── controller/
│   │       └── pk/                    # PK对战相关控制器
│   │           ├── BotInfoController.java  # AI机器人信息接口
│   │           └── IndexController.java    # 页面路由控制器
│   ├── pom.xml           # Maven项目配置
│   └── src/main/resources/
│       ├── application.properties     # 应用配置文件
│       └── templates/                 # Thymeleaf模板文件
│
└── web/                   # Vue 3 + CLI 主前端应用
    ├── src/
    │   ├── App.vue        # 主应用组件
    │   ├── main.js        # 应用入口
    │   ├── router/        # Vue Router路由配置
    │   ├── store/         # Vuex状态管理
    │   ├── views/         # 页面视图组件
    │   │   ├── HomeView.vue           # 首页
    │   │   ├── AboutView.vue          # 关于页面
    │   │   └── error/                 # 错误页面
    │   └── components/    # 可复用组件
    └── package.json       # 项目依赖配置
```

## 🛠️ 技术栈

### 前端技术
- **app模块**: Vue 3 + Vite (现代化构建工具)
- **web模块**: Vue 3 + Vue CLI + Vue Router + Vuex
- **UI框架**: Bootstrap 5 + jQuery
- **开发工具**: ESLint代码规范检查

### 后端技术
- **框架**: Spring Boot 2.7.1
- **模板引擎**: Thymeleaf
- **构建工具**: Maven
- **Java版本**: JDK 8

## 🚀 模块功能

### app 模块
- 基础的Vue 3演示应用
- 使用Vite作为构建工具，提供快速的开发体验
- 包含基础的Vue组件示例

### backend 模块
- 提供RESTful API服务
- 包含PK对战相关的后端逻辑
- AI机器人信息管理
- 使用Thymeleaf渲染前端页面

### web 模块
- 主要的前端用户界面
- 完整的单页应用(SPA)架构
- 包含路由管理和状态管理
- 响应式设计，支持多设备访问

## 📦 快速开始

### 前端应用启动

**启动app模块：**
```bash
cd app
npm install
npm run dev
```

**启动web模块：**
```bash
cd web
npm install
npm run serve
```

### 后端服务启动

```bash
cd backend
./mvnw spring-boot:run
```

或者使用Maven：
```bash
cd backend
mvn spring-boot:run
```

## 🔧 开发说明

1. **端口配置**：
   - app模块默认运行在Vite默认端口
   - web模块默认运行在Vue CLI默认端口
   - backend模块默认运行在8080端口

2. **API接口**：
   - 后端提供`/pk/getbotinfo/`接口获取机器人信息
   - 使用Spring Boot的自动配置特性

3. **构建部署**：
   - 前端应用可通过`npm run build`进行生产构建
   - 后端应用可通过Maven打包为可执行JAR文件

## 📋 待开发功能

- [ ] 完善AI对战逻辑
- [ ] 添加用户认证系统
- [ ] 实现实时对战功能
- [ ] 添加排行榜功能
- [ ] 完善游戏记录功能

---

> 这是一个正在开发中的AI对战平台项目，旨在提供一个完整的AI游戏对战解决方案。
