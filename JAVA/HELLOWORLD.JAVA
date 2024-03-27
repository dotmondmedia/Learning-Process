import java.util.scanner;
public class selection
{
    public static void main (String[] args)
    {
        scanner s = new scanner(System.in);
        int num;
        System.out.println("Enter any value");
        num = s.nextInt();
        if(num<0)System.out.println(num + "is a negative number ")
        else System.out.println(num + "is a positive number")
    }
}