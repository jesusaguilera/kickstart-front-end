# ESPECIFICIDAD

* Etiquetas HTML (body, main, section, article, div, h1, p, a) = 1
* Clases, selectores atributos y pseudo clases = 10
* Id = 100
* Estilos en línea = 1000
* Important = 10000

---

1 - #header-menu-link {} = ?
2 - body main div.header nav a {} = ?
3 - body main div.header nav a {x!important} = ?
4 - .header .navigation .link {} = ?
5 - style="xxx" = ?

---
3, 5, 1, 4, 2
---

# BEM

bloque__elemento--modificador

Nomenclatura aceptada:
  
  * header__nav--full-width
  * header__nav-item
  * header__nav-item--red

Nomenclatura rechazada por convención:

  * .foo // No namespace
  * .c-datePicker // Camel case
  * .o-media_img // Single underscore
  * .c-page-head-- // Trailing punctuation
  * c-header__nav__item
  * c-header__nav--red__item
  * c-header__nav--full-width__item--blue
---

# ITCSS ( Inverted Triangle CSS )

## Settings: Alberga las variables de configuración
## Tools: Mixins y funciones
## Generic: Código genérico del proyecto ( Normalize, Reset, * )
## Element: Estilos para etiquetas HTML
## Objects: Todo lo relacionado con el layout o que no dependa de ningún contexto.
## Components: Todo lo relacionado con bloques de nuestra interfaz ( header, dropdowns, carruseles, acordeones, banners, menus, etc. )
## Utilities: Estilos que nos ayudaran en situaciones muy determinadas y que sobreescribiran a todo lo anterior.

---

# BEMIT

---

## Prefijos:

---

### o- ( o-wrapper, o-grid, o-container, o-color-red, o-font-averta, o-text-bold.).

* Son reutilizables.
* Pueden vivir en cualquier contexto de la web. 
* Es arriesgado modificarlos.

---

### c- ( c-header, c-nav, c-footer, c-container, c-banner, c-button, c-form, c-tabs, c-title-description-image, c-counter, etc.)

* Son piezas concretas de la interfaz.
* Estas clases pueden ser modificadas con mayor seguridad.

---

### u- ( u-hide, u-width )

* Clases independientes.
* Las más específicas.
* Pueden tener el valor !important
* No se deben modificar ya que su declaración es específica.

---

### is- / has- (is-open, is-active, has-modal)

* Clases de estado.
* Informan de estados temporales.
* En la mayoría de los casos cohabitaran con alguna otra clase en un tag html.
* Pueden cambiar en función de acciones que haga el usuario.

---

### js-

* Clases para atacar con javascript al elemento que la lleven.
* Permiten trabajar de forma segura y parcelada.

---

### t- (t-dark, t-mahou, t-respol)

* Clases especificas de temas.
* Modifican varios elementos.

---

### s- (s-wordpress, s-wysiwyg, s-debug)

* Se pueden añadir en cualquier sección de la web.
* Asegurarse antes de usar.
* Especial para un CMS, contenido generado desde el back. (wysiwyg)
* Usar sólo en casos concretos de contextos.

---

### qa-

* No debe ser común su uso.
* Sólo se usas si se van a crear tareas automatizadas de QA.

---

### _ (hack)

* En momentos circustanciales puede ser que necesitemos una clase temporal o provisional para probar algo o que el cliente lo vea.

---

# Sufijos

---

### @ (.u-hide@md .u-width1/2@lg)

* Subfijo específico para mediaqueries (class@mediaquerie)

