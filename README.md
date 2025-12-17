#Mi Portfolio V2

Este es el rediseño de mi portfolio personal. 
Busco una estética minimalista, actual y funcional, poniendo el foco en que sea conciso y facil de leer;
por eso va a ser una single page application o una one-page web.

## Stack 

- **Framework:** React JS
- **Estilos:** Tailwind CSS o CSS en módulos
- **Iconos:** Lucide React o Simple-icons
- **Estado Global:** Context (para Temas e Idiomas)


## Características 

- **Bento Grid Layout:** Diseño responsive para mostrar proyectos y otras secciones como educacion / stack.
- **Modo Oscuro/Claro:** A Implementarse con Tailwind.
- **Traducción (i18n):** Funcion de traducción (ES/EN) manejada por un context.


## Estructura 

El proyecto sigue una estructura modular para que pueda escalarlo y mantenerlo, se usa:

- `contexts/`: Manejo de estado global para preferencias de básicas de un usuario.
- `components/`: Componentes principales.


## Instalación

1. Clona el repositorio: `git clone ...`
2. Instalar dependencias: `npm install`
3. Corre el proyecto: `npm run dev`