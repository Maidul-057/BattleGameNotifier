# BattleGameNotifier
A simple Java-based notification system for turn-based battle games, extended with a web-based UI that supports sound, console, and vibration notifications — including dark mode!
#Context
This project was originally assigned as part of my Software Engineering & Design Patterns course.
The task was to build a turn-based battle game notification system in Java:
First version: Without following DRY principle.
Second version: Refactored using loose coupling and interfaces.
My own extension: Created a web-based UI version using HTML, CSS, and JavaScript to visualize how the system would work in a browser or mobile device.

This helped me understand:

The power of abstraction and polymorphism
How to improve maintainability using OOP design principles
How desktop/console logic can inspire web development

# Features:

Java Version:

Follows Interface design
DRY-compliant
Multiple notifier types (Console, Sound, Vibration)

Web Version:

Dark Mode toggle
Console output simulation
Sound & vibration support
Responsive design
No backend required

# Run Instructions:

For Java:

Navigate to src folder
Compile: javac battlenotifier/*.java
Run: java battlenotifier.BattleGameNotification

For Web:

Open web/index.html in any browser
OR
Visit the GitHub Pages link
