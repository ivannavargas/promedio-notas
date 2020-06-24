function sumar ()
{
    Scanner leer=new Scanner(System.in);
int notas;

System.out.print("ingrese cantidad de notas:");
notas = leer.nextInt();

for(int i=1; i<= notas; i++){
    System.out.println("ingrese nota"+" "+i+" "+"de"+" "+notas+":");

    int nota=leer.nextInt();  
    int suma=0;
    int prom=0;         
    suma=suma + i;
    prom=prom + suma /notas;
    System.out.println("promedio de las notas:"+prom );

}
}   
