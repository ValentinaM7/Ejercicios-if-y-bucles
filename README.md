# Semana 2

### **Ejercicio 1: Autenticación básica**

Simula un login con usuario y contraseña predefinidos.

- Usuario correcto: `"admin"`
- Contraseña correcta: `"1234"`
    
    Pide al usuario que los ingrese y muestra si el acceso es concedido o denegado.
    

---

### **Ejercicio 2: Validador de correo**

Pide al usuario que ingrese una cadena de texto.

Verifica si contiene un `'@'` y un `'.'`.

Muestra si "parece un correo válido" o no.

(Investigar includes)

---

### **Ejercicio 3: Simulación de intentos de login (máximo 3)**

Permite al usuario intentar ingresar usuario y contraseña hasta 3 veces.

Si acierta, muestra "Acceso concedido".

Si falla 3 veces, muestra "Cuenta bloqueada".

---

### **Ejercicio 4: Simulador de cajero automático (retiro simple)**

Define un saldo inicial, por ejemplo: `$1000`.

Pide al usuario un monto para retirar.

- Si el monto es menor o igual al saldo, realiza el retiro y muestra el nuevo saldo.
- Si no, muestra "Fondos insuficientes".

---

### **Ejercicio 5: Bloqueo por PIN incorrecto**

Define un PIN correcto (por ejemplo: `4321`).

Permite al usuario ingresarlo hasta 3 veces.

- Si lo acierta, muestra "PIN correcto".
- Si falla las 3 veces, muestra "Tarjeta bloqueada".

### **Ejercicio 6: Menú de opciones básico**

Muestra un menú repetidamente hasta que el usuario elija salir:

```jsx
1. Ver saludo
2. Mostrar hora ficticia
3. Salir
```

Usa un bucle. Las opciones pueden mostrar mensajes simulados como “Hola, usuario” o “La hora es 12:00”.

---

### **Ejercicio 7: Verificación de contraseña segura**

Pide una contraseña al usuario.

Verifica si cumple:

- Al menos 8 caracteres
- Contiene al menos un número (simulado, por ejemplo, buscando si hay un '0'–'9')
    
    Muestra si es "Segura" o "Insegura".
    

---

### **Ejercicio 8: Temporizador regresivo**

Pide al usuario un número entero positivo.

Cuenta regresivamente hasta 0 usando un bucle, mostrando cada número.

---

### **Ejercicio 9: Contador de letras en una palabra**

Pide una palabra.

Cuenta cuántos caracteres tiene **sin usar funciones de strings avanzadas** (simularlo con un bucle).

---

### **Ejercicio 10: Acceso por edad mínima con intentos**

Pide la edad al usuario.

- Si es mayor o igual a 18, permite el acceso.
- Si es menor, niega el acceso.
    
    Permite hasta 3 intentos antes de mostrar "Acceso bloqueado por intentos fallidos".
