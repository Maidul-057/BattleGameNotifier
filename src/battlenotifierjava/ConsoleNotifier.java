package battlenotifierjava;

public class ConsoleNotifier implements BattleNotifier {
    public void notify(String player, String action, int damage) {
        System.out.println("[Console] Player " + player + " performed " + action + " and dealt " + damage + " damage!");
    }
}
