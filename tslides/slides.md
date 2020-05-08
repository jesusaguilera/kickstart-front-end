
# BEM

# Prefijos:

---

### o- ( o-wrapper, o-grid, o-container, o-color-red, o-font-averta, o-text-bold.).

- Son reutilizables.
- Pueden vivir en cualquier contexto de la web. 
- Es arriesgado modificarlos.

---

### c- ( c-header, c-nav, c-footer, c-banner, c-button, c-form, c-tabs, etc.)

- Son piezas concretas de la interfaz. 
- Estas clases pueden ser modificadas con mayor seguridad. 

---

### u- ( u-hide, u-width )

- Clases independientes.
- Las más específicas.
- Pueden tener el valor !important
- No se deben modificar ya que su declaración es específica.

---

### is- / has- (is-open, is-active, has-modal)

- Clases de estado.
- Informan de estados temporales.
- En la mayoría de los casos cohabitaran con alguna otra clase en un tag html.
- Pueden cambiar en función de acciones que haga el usuario.

---

### js- 

- Clases para atacar con javascript al elemento que la lleven.
- Trabajar de forma segura.

---

### t- (t-dark)

- Clases especificas de temas.
- Modifican varios elementos.

---

### s- (s-wordpress, s-wysiwyg, s-debug)

- Se pueden añadir en cualquier sección de la web.
- Asegurarse antes de usar.
- Especial para un CMS, contenido generado desde el back. (wysiwyg)
- Usar sólo en casos concretos de contextos.

---

### qa-

- No debe ser común su uso.
- Sólo se usas si se van a crear tareas automatizadas de QA.

---

### _ (hack)

- En momentos circustanciales puede ser que necesitemos una clase temporal o provisional para probar algo o que el cliente lo vea.

---

# Subijos

---

### @ (.u-hide@md .u-width1/2@lg)

- Subfijo específico para mediaqueries (class@mediaquerie)

