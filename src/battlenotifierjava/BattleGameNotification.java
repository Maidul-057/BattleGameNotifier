package battlenotifierjava;

public class BattleGameNotification {
    public static void main(String[] args) {
        BattleNotifier console = new ConsoleNotifier();
        BattleNotifier sound = new SoundNotifier();
        BattleNotifier vibration = new VibrationNotifier();

        GameEventManager game1 = new GameEventManager(console);
        GameEventManager game2 = new GameEventManager(sound);
        GameEventManager game3 = new GameEventManager(vibration);
        game1.playerAttack("Knight", "Slash", 40);
        game2.playerAttack("Wizard", "Fireball", 70);
        game3.playerAttack("Rogue", "Backstab", 55);
    }
}