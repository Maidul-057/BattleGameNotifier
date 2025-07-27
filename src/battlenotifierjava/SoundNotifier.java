package battlenotifierjava;

public class SoundNotifier implements BattleNotifier {
    public void notify(String player, String action, int damage) {
        System.out.println("[Sound] Playing sound: Player " + player + " performed " + action + " and dealt " + damage + " damage!");
    }
}
