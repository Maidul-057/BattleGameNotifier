package battlenotifierjava;

public class VibrationNotifier implements BattleNotifier {
    public void notify(String player, String action, int damage) {
        System.out.println("[Vibration] Device vibrates for message: Player " + player + " performed " + action + " and dealt " + damage + " damage!");
    }
}