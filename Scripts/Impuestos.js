function obtenerImporteConImpuestos(valorSinImpuestos,tipoProducto) {
    if (tipoProducto === 1) {
        var porcentaje = valorSinImpuestos * 0.21;
        var valorTotal = porcentaje + valorSinImpuestos;
        alert("El valor sin impuestos más el 21% es de " + valorTotal);
    }else if (tipoProducto === 2) {
        var porcentaje = valorSinImpuestos * 0.10;
        var valorTotal = porcentaje + valorSinImpuestos;
        alert("El valor sin impuestos más el 10% es de " + valorTotal);
    }else if (tipoProducto === 3) {
        var porcentaje = valorSinImpuestos * 0.05;
        var valorTotal = porcentaje + valorSinImpuestos;
        alert("El valor sin impuestos más el 5% es de " + valorTotal);
    }else{
        alert("El valor de los parametros enviados no son válidos");
    }
}

obtenerImporteConImpuestos(100,3);