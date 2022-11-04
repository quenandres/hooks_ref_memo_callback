### Para qué sirve useRef, useMemo, useCallback, diferencia con useState ? NO SIEMPRE HAY QUE USARLOS !

React utiliza virtual DOM, cada vez que se haga un render, compara la copia anterior del DOM con el estado actual del DOM para cambiar unicamente la que tuvo el cambio.

El cambio de useEffect solo se hace presente cuando cambia las depencias.

#### useRef
Referenciamos un elemento.
```js
<button ref={refButton} onClick={handleClick}>Click here to change name</button>
<button onClick={() => refButton.current.click()}>Click here to other button clone</button>
```

#### useMemo
No hace render, unicamente cambia la logica de memoria que tenga.
La primer problematica, es el uso de memoria para datos grandes.
No es 100% fiable su memoria podria fallar.

#### useCallback
