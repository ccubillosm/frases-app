# 📋 Instrucciones de Configuración - Frases Inspiradoras

## 🎯 Objetivo

Este documento proporciona instrucciones paso a paso para configurar y ejecutar la aplicación **Frases Inspiradoras** en tu entorno local.

## 📋 Prerrequisitos

### Software Requerido
- **Node.js**: Versión 18.0 o superior
- **npm**: Versión 8.0 o superior (incluido con Node.js)
- **Git**: Para clonar el repositorio
- **Editor de código**: VS Code recomendado

### Verificar Instalaciones
```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version
```

## 🔧 Configuración Paso a Paso

### 1. Clonar el Repositorio
```bash
# Navegar al directorio de trabajo
cd /ruta/a/tu/workspace

# Clonar el repositorio
git clone https://github.com/ccubillosm/frases-app.git

# Entrar al directorio del proyecto
cd frases-app
```

### 2. Instalar Dependencias
```bash
# Instalar todas las dependencias del proyecto
npm install

# Verificar que no hay errores
npm run lint
```

### 3. Configurar Variables de Entorno

#### Opción A: Copiar archivo de ejemplo
```bash
# Copiar el archivo de ejemplo
cp env.example .env.local

# Editar el archivo con tu editor preferido
code .env.local
```

#### Opción B: Crear manualmente
```bash
# Crear archivo .env.local
touch .env.local

# Editar el archivo
nano .env.local
```

#### Contenido del archivo .env.local
```env
# Unsplash API Configuration
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=tu_api_key_aqui
UNSPLASH_ACCESS_KEY=tu_api_key_aqui

# App Configuration
NEXT_PUBLIC_APP_NAME=Frases Inspiradoras
```

### 4. Obtener API Key de Unsplash

#### Paso 1: Crear cuenta en Unsplash
1. Ve a [unsplash.com](https://unsplash.com)
2. Haz clic en "Join" para crear una cuenta
3. Completa el proceso de registro

#### Paso 2: Acceder a la API
1. Ve a [Unsplash Developers](https://unsplash.com/developers)
2. Haz clic en "Your apps"
3. Haz clic en "New Application"

#### Paso 3: Configurar la aplicación
1. **Application name**: `Frases Inspiradoras`
2. **Description**: `Aplicación web para generar frases inspiradoras con imágenes`
3. **What are you building?**: `Web application`
4. **Will your app upload photos?**: `No`
5. **Will your app use the demo app?**: `No`

#### Paso 4: Obtener la API Key
1. Una vez creada la aplicación, verás tu **Access Key**
2. Copia esta clave
3. Pégala en tu archivo `.env.local`

### 5. Verificar Configuración
```bash
# Verificar que las variables están cargadas
npm run dev

# En otra terminal, verificar que no hay errores
npm run type-check
```

## 🚀 Ejecutar la Aplicación

### Modo Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:
# http://localhost:3000
```

### Modo Producción
```bash
# Construir la aplicación
npm run build

# Iniciar servidor de producción
npm start
```

## 🔍 Verificar Funcionamiento

### 1. Carga Inicial
- ✅ La aplicación se carga sin errores
- ✅ Se muestra una frase aleatoria
- ✅ Se muestra una imagen relacionada
- ✅ El diseño es responsivo

### 2. Funcionalidad Principal
- ✅ El botón "Generar nueva frase" funciona
- ✅ Se cargan nuevas frases e imágenes
- ✅ Las transiciones son suaves
- ✅ El loading state funciona correctamente

### 3. Responsividad
- ✅ Funciona en dispositivos móviles
- ✅ Funciona en tablets
- ✅ Funciona en escritorio
- ✅ El layout se adapta correctamente

## 🚨 Solución de Problemas

### Error: "Unsplash API key no configurada"
**Causa**: La variable de entorno no está configurada correctamente
**Solución**:
```bash
# Verificar que el archivo .env.local existe
ls -la .env.local

# Verificar el contenido del archivo
cat .env.local

# Asegurarse de que no hay espacios extra
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=tu_key_sin_espacios
```

### Error: "Error en la API de Unsplash: 401"
**Causa**: API key inválida o expirada
**Solución**:
1. Verificar que la API key es correcta
2. Verificar que la aplicación está activa en Unsplash
3. Verificar que no se ha excedido el límite de requests

### Error: "Module not found"
**Causa**: Dependencias no instaladas correctamente
**Solución**:
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 is already in use"
**Causa**: Otro proceso está usando el puerto 3000
**Solución**:
```bash
# Cambiar puerto
npm run dev -- -p 3001

# O matar el proceso que usa el puerto 3000
lsof -ti:3000 | xargs kill -9
```

## 📱 Testing en Diferentes Dispositivos

### Herramientas de Testing
- **Chrome DevTools**: Simular dispositivos móviles
- **Responsively App**: Testing en múltiples resoluciones
- **BrowserStack**: Testing en dispositivos reales

### Resoluciones a Probar
- **Mobile**: 375x667, 414x896
- **Tablet**: 768x1024, 1024x1366
- **Desktop**: 1920x1080, 2560x1440

## 🔒 Consideraciones de Seguridad

### Variables de Entorno
- ✅ Nunca committear archivos `.env.local`
- ✅ Usar `.env.example` para documentar variables
- ✅ Rotar API keys regularmente
- ✅ Limitar permisos de la aplicación en Unsplash

### API Rate Limiting
- **Unsplash**: 50 requests por hora para aplicaciones demo
- **Producción**: Solicitar aumento de límites si es necesario

## 📊 Monitoreo y Logs

### Logs de Desarrollo
```bash
# Ver logs en tiempo real
npm run dev

# Los logs aparecen en la consola del terminal
```

### Logs de Producción
```bash
# Construir y ejecutar
npm run build
npm start

# Los logs aparecen en la consola
```

## 🚀 Deployment

### Plataformas Recomendadas
1. **Vercel** (Recomendado para Next.js)
2. **Netlify**
3. **AWS Amplify**
4. **GitHub Pages**

### Variables de Entorno en Producción
- Configurar las mismas variables en la plataforma de hosting
- Usar nombres de variables apropiados para producción
- Verificar que las variables están disponibles en runtime

## 📚 Recursos Adicionales

### Documentación Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Unsplash API](https://unsplash.com/developers)

### Comunidad
- [Next.js Discord](https://discord.gg/nextjs)
- [Tailwind CSS Discord](https://discord.gg/7NF8GNe)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**¿Necesitas ayuda?** Abre un issue en el repositorio de GitHub o contacta al equipo de desarrollo.
