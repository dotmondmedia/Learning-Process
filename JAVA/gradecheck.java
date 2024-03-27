import java.util.scanner;
public class selection
{
    public static void main (String[] args)
    {
        scanner sc = new scanner(System.in);
        int s;
        System.out.println("Enter your score");
        s= sc.nextInt();
        if(s>=70 && s<100)System.out.println("Your grade is A");
        else if(s>60 && S<70)System.out.println("Your grade is B");
        else if(s>50 && S<60)System.out.println("Your grade is C");
        else if(s>45 && S<50)System.out.println("Your grade is D");
        else if(s>40 && S<40)System.out.println("Your grade is E");
        else if(s>0)System.out.println("Your grade is F");
        else System.out.println(X:"invalid score");