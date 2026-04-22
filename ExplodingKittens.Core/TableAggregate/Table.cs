using ExplodingKittens.Core.PlayerAggregate;
using ExplodingKittens.Core.PlayerAggregate.Contracts;
using ExplodingKittens.Core.TableAggregate.Contracts;
using ExplodingKittens.Core.UserAggregate;


namespace ExplodingKittens.Core.TableAggregate;

/// <inheritdoc cref="ITable"/>
internal class Table : ITable
{
    private readonly List<IPlayer> _seatedPlayers = new();
    private readonly ITablePreferences _preferences;
    private readonly Guid _id;
    internal Table(Guid id, ITablePreferences preferences)
    {
        _id = id;
        _preferences = preferences;
    }

    public Guid Id => _id;

    public ITablePreferences Preferences => _preferences;

    public IReadOnlyList<IPlayer> SeatedPlayers => _seatedPlayers;

    public bool HasAvailableSeat => _seatedPlayers.Count < _preferences.NumberOfPlayers;

    public Guid GameId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

    public void Join(User user)
    {
        IPlayer player = new HumanPlayer(user.Id, user.UserName, user.BirthDate);

        _seatedPlayers.Add(player);
    }

    public void Leave(Guid userId)
    {
        var player = _seatedPlayers.FirstOrDefault(p => p.Id == userId);
        {
            if(player != null)
            {
                _seatedPlayers.Remove(player);
            }
        }

    }

    public void LetArtificialPlayersJoin(IGamePlayStrategy gamePlayStrategy)
    {
        throw new NotImplementedException();
    }
}