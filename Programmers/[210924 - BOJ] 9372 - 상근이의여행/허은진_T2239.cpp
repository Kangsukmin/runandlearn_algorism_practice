#include<iostream>
using namespace std;

int T, N, M;

int main(void){
    scanf("%d", &T);

    while(T--){
        scanf("%d %d", &N, &M);
        for(int a, b, i = 0; i < M; ++i){
            scanf("%d %d", &a, &b);
        }
        printf("%d\n", N-1);
    }
    
}