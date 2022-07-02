def twoSum1(nums: list[int], target: int) -> list[int]:
    """
    Two sum: brutal force of two-level nested iterations.
    Args:
        nums    the input array of numbers.
        target  the target sum to search.
    Returns:
        the indexes of the two numbers.
    """
    for i in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []


def twoSum2(nums: list[int], target: int) -> list[int]:
    """
    Two sum: hash map plus search.
    Args:
        nums    the input array of numbers.
        target  the target sum to search.
    Returns:
        the indexes of the two numbers.
    """
    # first create a hash map
    map = {nums[i]: i for i in range(len(nums))}
    # then search target using the hash map
    for i in range(len(nums)):
        num = target - nums[i]
        if num in map and i != map[num]:
            return [i, map[num]]
    return []


def twoSum(nums: list[int], target: int) -> list[int]:
    """
    Two sum: hash map while search.
    Args:
        nums    the input array of numbers.
        target  the target sum to search.
    Returns:
        the indexes of the two numbers.
    """
    map = {}
    for i in range(len(nums)):
        num = target - nums[i]
        # search target at the same time: return if found
        if num in map and i != map[num]:
            return [i, map[num]]
        # keep creating the hash map if not found
        map[nums[i]] = i
    return []


if __name__ == "__main__":
    import json
    print("Task 0001 - Two Sum:")

    nums = [2, 7, 11, 15]
    target = 9
    print(f"  target={target}, nums={json.dumps(nums)}")
    re = twoSum(nums, target)
    print(f"  result={json.dumps(re)}")

    nums = [3, 2, 4]
    target = 6
    print(f"  target={target}, nums={json.dumps(nums)}")
    re = twoSum(nums, target)
    print(f"  result={json.dumps(re)}")
