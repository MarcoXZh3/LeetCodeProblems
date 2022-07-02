def twoSum(nums: list[int], target: int) -> list[int]:
    """
    Args:
        nums    the input array of numbers
        target  the target sum to search
    Returns:
        the indexes of the two numbers
    """

    pass


if __name__ == "__main__":
    import json
    print('Task 0001 - Two Sum:')
    nums = [2, 7, 11, 15]
    target = 9
    print(f'  target={target}, nums={json.dumps(nums)}')
    re = twoSum(nums, target)
    print(f'  result={json.dumps(re)}')
