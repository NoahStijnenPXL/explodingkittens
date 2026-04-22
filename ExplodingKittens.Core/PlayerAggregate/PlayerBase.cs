using ExplodingKittens.Core.CardAggregate;
using ExplodingKittens.Core.PlayerAggregate.Contracts;
using System.Security.Cryptography.X509Certificates;

namespace ExplodingKittens.Core.PlayerAggregate;

/// <inheritdoc cref="IPlayer"/>
internal class PlayerBase : IPlayer
{
    private readonly Guid _id;
    private readonly string _name;
    private readonly DateOnly _birthDate;
    
    protected PlayerBase(Guid id, string name, DateOnly birthDate)
    {
        _id = id;
        _name = name;
        _birthDate = birthDate;
    }

    public Guid Id => _id ;

    public string Name => _name;

    public DateOnly BirthDate => _birthDate;

    public IHand Hand => throw new NotImplementedException();

    public bool HasExplodingKitten => throw new NotImplementedException();

    public bool Eliminated => throw new NotImplementedException();

    public IReadOnlyList<Card> FutureCards { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
}