// remove tickets that are already resolved
const visibleTickets = promiseHandled.filter(
    ticket => !resolvedTicket.some(resolved => resolved.id === ticket.id)
)

## Walk through this for the initial render, where resolvedTicket = []:

For every ticket in promiseHandled, it checks: resolvedTicket.some(resolved => resolved.id === ticket.id)
.some() on an empty array always returns false — there's nothing to iterate, so nothing can match.
So the condition becomes !false → true
Since it's true for every single ticket, every ticket passes the filter and shows up.

So that's the mechanism: visibleTickets isn't hardcoded to "show everything at first" — it naturally shows everything at first because resolvedTicket is empty at first. As soon as you click Complete on a card:
jssetResolvedTicket((prev) => [...prev, r])
...resolvedTicket gains an entry, causing a re-render, and now for that specific ticket, .some() returns true, so !true → false, and it gets filtered out.
It's not a separate "initial state" you set up — it's just the natural consequence of starting from an empty array and filtering against it. That's actually one of the nice things about deriving values like this: you don't need special-case logic for "show all at first," it just falls out of the empty state.
