package battlenotifierjava;

public class GameEventManager {
    private BattleNotifier notifier;

    public GameEventManager(BattleNotifier notifier) {
        this.notifier = notifier;
    }

    public void playerAttack(String player, String action, int damage) {
        notifier.notify(player, action, damage);
    }
}