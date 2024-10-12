class Item {
    int friend;
    int chair = -1;
    int startTime;
    int endTime;

    public Item(int friend, int startTime, int endTime) {
        this.friend = friend;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public void setChair(int chair) {
        this.chair = chair;
    }
}

class Solution {
    public int smallestChair(int[][] times, int targetFriend) {
        Item[] arrival = new Item[times.length];

        PriorityQueue<Integer> available = new PriorityQueue<>();
        PriorityQueue<Item> assigned = new PriorityQueue<>((a, b) -> a.endTime - b.endTime);

        for (int i = 0; i < times.length; i++) {
            arrival[i] = new Item(i, times[i][0], times[i][1]);
            available.add(i);
        }

        // here i am Sorting friends by their arrival times
        Arrays.sort(arrival, (a, b) -> a.startTime - b.startTime);

        for (int i = 0; i < arrival.length; i++) {
            Item item = arrival[i];

            //here i am Freeing up chairs for people who have left by this time
            while (!assigned.isEmpty() && assigned.peek().endTime <= item.startTime) {
                available.add(assigned.poll().chair);
            }

            // now Assign the smallest available chair to the current friend
            item.setChair(available.poll());
            assigned.add(item);

            // If this is the target friend, return their chair number
            if (item.friend == targetFriend) {
                return item.chair;
            }
        }

        return -1;
    }
}
