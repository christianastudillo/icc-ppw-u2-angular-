# Programación y Plataformas Web

# Frameworks Web — Angular 21

<div align="center">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" width="110" alt="Angular Logo">

# Portafolio de Prácticas Angular 21

</div>

---

# Autor

## Christian Astudillo

- Universidad Politécnica Salesiana
- Programación y Plataformas Web

---

# Contenido

1. Instalación y Configuración
2. Fundamentos Angular
3. Navegación y Router
4. Estilos y Layout con Tailwind CSS
5. Formularios Reactivos

---

# 01. Instalación y Configuración

---

## Objetivo

Configurar correctamente el entorno de desarrollo para trabajar con Angular 21 utilizando Node.js, Angular CLI y Visual Studio Code.

---

## Herramientas utilizadas

- Node.js
- npm
- Angular CLI
- Visual Studio Code
- Git
- GitHub

---

## Instalación de Node.js

### Verificación de instalación

```bash
node -v
npm -v
````

### Captura requerida

>  CAPTURA  — Resultado de `node -v` y `npm -v`

---

## Instalación de Angular CLI

### Comando utilizado

```bash
npm install -g @angular/cli
```

### Verificación

```bash
ng version
```

### Captura requerida

>  CAPTURA  — Resultado de `ng version`

---

## Creación del proyecto Angular

### Comando utilizado

```bash
ng new mi-primer-proyecto
```

### Opciones seleccionadas

* Routing: Yes
* Stylesheet: CSS

### Captura requerida

>  CAPTURA  — Creación del proyecto Angular

---

## Ejecución del proyecto

### Comando utilizado

```bash
ng serve -o
```

La aplicación se ejecuta en:

```bash
http://localhost:4200
```

### Captura requerida

>  CAPTURA  — Aplicación ejecutándose en el navegador

---

## Estructura básica del proyecto

| Carpeta/Archivo | Descripción               |
| --------------- | ------------------------- |
| src/            | Código fuente principal   |
| app/            | Componentes y lógica      |
| assets/         | Recursos estáticos        |
| angular.json    | Configuración Angular     |
| package.json    | Dependencias del proyecto |

### Captura requerida

>  CAPTURA  — Estructura del proyecto en VSCode

---

## Extensiones utilizadas en VSCode

* Angular Language Service
* Angular Schematics
* Tailwind CSS IntelliSense
* Prettier
* ESLint

### Captura requerida

>  CAPTURA  — Extensiones instaladas

---

## Conclusiones

* Se configuró correctamente el entorno Angular.
* Se verificó el funcionamiento de Angular CLI.
* Se ejecutó exitosamente un proyecto Angular 21.
* Se preparó el entorno para futuras prácticas.

---

# 02. Fundamentos Angular

---

## Objetivo

Comprender los fundamentos principales de Angular mediante la creación de componentes, uso de bindings, eventos y renderizado dinámico.

---

## Temas trabajados

* Componentes standalone
* Property Binding
* Event Binding
* Interpolación
* Signals
* Directivas `@if` y `@for`

---

## Creación de componentes

### Comando utilizado

```bash
ng g c components/header --standalone
```

### Captura requerida

>  CAPTURA  — Componente generado

---

## Uso de Interpolación

### Ejemplo

```html
<h1>{{ title }}</h1>
```

Permite mostrar datos dinámicos desde TypeScript hacia el HTML.

### Captura requerida

>  CAPTURA  — Resultado de interpolación

---

## Property Binding

### Ejemplo

```html
<img [src]="imageUrl">
```

Permite enlazar propiedades HTML con variables TypeScript.

### Captura requerida

>  CAPTURA  — Ejemplo funcionando

---

## Event Binding

### Ejemplo

```html
<button (click)="increment()">Incrementar</button>
```

Permite reaccionar a eventos del usuario.

### Captura requerida

>  CAPTURA  — Evento funcionando

---

## Uso de Signals

### Ejemplo

```ts
counter = signal(0);
```

Las signals permiten manejar estado reactivo.

### Captura requerida

>  CAPTURA  — Uso de signals

---

## Uso de @if

### Ejemplo

```html
@if (isVisible()) {
  <p>Contenido visible</p>
}
```

Permite renderizado condicional moderno.

### Captura requerida

>  CAPTURA  — Uso de @if

---

## Uso de @for

### Ejemplo

```html
@for (item of items(); track item) {
  <li>{{ item }}</li>
}
```

Permite renderizar listas dinámicamente.

### Captura requerida

>  CAPTURA  — Uso de @for

---

## Conclusiones

* Se comprendieron los fundamentos principales de Angular.
* Se implementaron bindings y renderizado dinámico.
* Se utilizaron componentes standalone y signals.
* Se aplicaron nuevas directivas modernas de Angular 21.

---

# 03. Navegación y Router

---

## Objetivo

Implementar navegación entre páginas utilizando Angular Router y componentes standalone.

---

## Temas trabajados

* Angular Router
* routerLink
* routerLinkActive
* app.routes.ts
* Navegación SPA

---

## Configuración de rutas

### Archivo utilizado

```ts
app.routes.ts
```

### Ejemplo

```ts
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
];
```

### Captura requerida

>  CAPTURA  — Configuración de rutas

---

## Navegación con routerLink

### Ejemplo

```html
<a routerLink="/about">About</a>
```

### Captura requerida

>  CAPTURA  — Navegación funcionando

---

## Ruta activa

### Ejemplo

```html
routerLinkActive="active"
```

Permite aplicar estilos a la ruta actual.

### Captura requerida

>  CAPTURA  — Ruta activa

---

## Router Outlet

### Ejemplo

```html
<router-outlet />
```

Es el espacio donde Angular renderiza los componentes según la ruta.

### Captura requerida

>  CAPTURA  — Router outlet funcionando

---

## Navegación SPA

Angular permite cambiar páginas sin recargar el navegador.

### Captura requerida

>  CAPTURA  — Navegación SPA

---

## Conclusiones

* Se configuró Angular Router.
* Se implementó navegación SPA.
* Se utilizaron rutas standalone.
* Se aplicaron enlaces dinámicos y rutas activas.

---

# 04. Estilos y Layout con Tailwind CSS

---

## Objetivo

Aplicar estilos modernos y layouts responsivos utilizando Tailwind CSS dentro de Angular.

---

## Tecnologías utilizadas

* Angular 21
* Tailwind CSS
* HTML
* CSS Utility Classes

---

## Instalación de Tailwind

### Comando utilizado

```bash
npm install tailwindcss @tailwindcss/postcss postcss --force
```

### Captura requerida

>  CAPTURA  — Instalación de Tailwind

---

## Configuración de Tailwind

### Archivo CSS principal

```css
@import "tailwindcss";
```

### Captura requerida

>  CAPTURA  — Configuración Tailwind

---

## Uso de clases utility

### Ejemplo

```html
<div class="bg-slate-900 text-white p-10 rounded-xl">
```

### Captura requerida

>  CAPTURA  — Componentes estilizados

---

## Layout Responsive

### Clases utilizadas

```html
max-w-4xl mx-auto grid md:grid-cols-2 gap-6
```

### Captura requerida

>  CAPTURA  — Diseño responsive

---

## Componentes trabajados

* Header
* Navbar
* Cards
* Botones
* Formularios

### Captura requerida

>  CAPTURA  — Vista general del proyecto

---

## Beneficios de Tailwind

| Beneficio      | Descripción           |
| -------------- | --------------------- |
| Rapidez        | Desarrollo más rápido |
| Reutilización  | Clases reutilizables  |
| Responsive     | Fácil adaptación      |
| Diseño moderno | Interfaces limpias    |

---

## Conclusiones

* Se integró Tailwind correctamente con Angular.
* Se diseñaron interfaces modernas y responsive.
* Se utilizaron utility classes para agilizar el desarrollo.
* Se mejoró la experiencia visual de la aplicación.

---

# 05. Formularios Reactivos

---

## Objetivo

Implementar formularios reactivos en Angular utilizando validaciones síncronas, validadores custom, validadores async, FormArray y reutilización de código con FormUtils.

---

## Temas trabajados

* ReactiveFormsModule
* FormControl
* FormGroup
* FormArray
* Validators
* Async Validators
* FormUtils
* Radio buttons
* Checkboxes
* Switches

---

# Práctica A — Signup Reactivo

---

## Campos implementados

* Email
* Password
* Confirm Password

---

## Validaciones utilizadas

* required
* email
* minlength
* passwordMismatch
* emailTaken

### Captura requerida

>  CAPTURA  — Formulario signup completo

---

## Validador Custom

### password-match.validator.ts

Permite verificar que las contraseñas coincidan.

### Captura requerida

>  CAPTURA  — Error passwordMismatch

---

## Validador Async

### email-unique.validator.ts

Simula validación de email ya registrado.

### Captura requerida

>  CAPTURA  — Validación async funcionando

---

# Práctica B — FormUtils

---

## Métodos implementados

* isValidField()
* getFieldError()
* getTextError()
* isValidFieldInArray()
* getFieldErrorInArray()

### Captura requerida

>  CAPTURA  — Uso de FormUtils

---

## Beneficios de FormUtils

| Beneficio      | Descripción                         |
| -------------- | ----------------------------------- |
| Centralización | Todos los mensajes en un solo lugar |
| Reutilización  | Funciona en cualquier formulario    |
| Escalabilidad  | Fácil agregar nuevos validadores    |
| Mantenimiento  | Cambios globales rápidos            |

---

# Práctica C — Formularios Dinámicos

---

## FormArray dinámico

### Funcionalidades

* Agregar lenguajes
* Eliminar lenguajes
* Validación mínima de elementos

### Captura requerida

>  CAPTURA  — FormArray dinámico funcionando

---

## Controles especiales

### Implementados

* Radio buttons
* Checkbox obligatorio
* Switch de notificaciones

### Captura requerida

>  CAPTURA  — Controles especiales

---

## Validaciones implementadas

| Validación       | Descripción          |
| ---------------- | -------------------- |
| required         | Campo obligatorio    |
| email            | Correo válido        |
| minlength        | Longitud mínima      |
| requiredTrue     | Checkbox obligatorio |
| passwordMismatch | Contraseñas iguales  |
| emailTaken       | Correo ya registrado |

---

## Resultado final

El proyecto integra:

* Formularios simples
* Formularios complejos
* Validaciones síncronas
* Validaciones asíncronas
* Formularios dinámicos
* Reutilización de lógica con FormUtils

### Captura requerida

>  CAPTURA  — Formulario final válido

---

## Conclusiones

* Se comprendió el funcionamiento de formularios reactivos.
* Se implementaron validaciones avanzadas.
* Se reutilizó lógica mediante FormUtils.
* Se utilizaron FormArray y controles especiales.
* Se construyeron formularios escalables y mantenibles.


---

# Conclusión General

Durante el desarrollo de estas prácticas se logró comprender el funcionamiento completo de Angular 21, desde la instalación y configuración inicial hasta la construcción de formularios reactivos complejos.

Se aplicaron conceptos modernos como:

* Componentes standalone
* Angular Router
* Tailwind CSS
* Reactive Forms
* FormArray
* Validadores custom y async
* Reutilización de lógica con FormUtils

Estas prácticas permitieron fortalecer conocimientos sobre desarrollo frontend moderno utilizando Angular y buenas prácticas de escalabilidad y mantenimiento.

```