// import.util.java;
//     public static void main(string[] args){
//         scanner sc = new scanner(system.in);
//         system.out.print("Enter a number");
//         int.num= sc.nextInt();
//         int count = 0


//     }

import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the console
        Scanner scanner = new Scanner(System.in); 
        
        // Read user input
        System.out.println("Enter your name:");
        String name = scanner.nextLine();
        
        System.out.println("Enter your age:");
        int age = scanner.nextInt();
        
        // Consume the newline character left in the input buffer
        scanner.nextLine();
        
        System.out.println("Enter your favorite color:");
        String color = scanner.nextLine();
        
        // Display the input
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Favorite color: " + color);
        
        // Close the Scanner object
        scanner.close();
    }
}
